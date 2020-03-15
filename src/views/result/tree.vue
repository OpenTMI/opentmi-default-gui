<template>
    <div class="app-container">
        <v-jstree :data="treeData" :async="loadData" @item-click="itemClick"></v-jstree>
    </div>
</template>

<script>
import VJstree from 'vue-jstree'
import { resultsList } from '@/api/results'

export default {
    name: 'ResultTree',
    components: {
        VJstree
    },
    data() {
        return {
            treeData: [],
            loadData: (node, resolve) => {
                const id = node.data.id ? node.data.id : 0
                const level = node.data.level
                if (id === 0) {
                    this.getCampaigns().then(resolve)
                } else if (level === 0) {
                    const {campaign} = node.data
                    this.getJobs(campaign).then(resolve)
                } else if (level === 1) {
                    const {campaign, job} = node.data
                    this.getTests(campaign, job).then(resolve)
                } else if (level === 2) {
                    const {campaign, job, tcid} = node.data
                    this.getResults(campaign, job, tcid).then(resolve)
                }
            },
        }
    },

    methods: {
        distinct(filters, field) {
            const query = {
                t: 'distinct',
                f: field,
                s: {'cre.time': 1},
                'cre.time': {
                    $gt: this.lastWeekDate().toISOString()
                }
            }
            return this._.merge(query, filters)
        },
        getCampaigns() {
            const query = this.distinct({}, 'campaign')
            return resultsList(query)
                .then(({data}) => {
                    const treeData = this._.map(data, item => ({
                        text: item,
                        level: 0,
                        campaign: item,
                        isLeaf: false
                    }))
                    return treeData
                })
        },
        getJobs(campaign) {
            const query = this.distinct({campaign}, 'job.id')
            return resultsList(query)
                .then(({data}) => {
                    const treeData = this._.map(data, item => ({
                        text: item,
                        level: 1,
                        campaign,
                        job: item,
                        isLeaf: false
                    }))
                    return treeData
                })
        },
        getTests(campaign, job) {
            const query = this.distinct({campaign, 'job.id': job}, 'tcid')
            return resultsList(query)
                .then(({data}) => {
                    const treeData = this._.map(data, item => ({
                        text: item,
                        level: 2,
                        campaign,
                        job,
                        tcid: item,
                        isLeaf: false
                    }))
                    return treeData
                })
        },
        getResults(campaign, job, tcid) {
            const query = {
                campaign,
                'job.id': job,
                tcid,
                s: {'cre.time': 1},
            }
            return resultsList(query)
                .then(({data}) => {
                    const treeData = this._.map(data, item => ({
                        text: `${item.exec.verdict} - ${this._.get(item, 'exec.duts.0.model', '')}`,
                        level: 3,
                        icon: 'fa fa-check icon-state-success',
                        campaign,
                        job,
                        tcid,
                        isLeaf: true
                    }))
                    return treeData
                })
        },
        lastWeekDate() {
            const ourDate = new Date();
            //Change it so that it is 7 days in the past.
            const pastDate = ourDate.getDate() - 7;
            ourDate.setDate(pastDate);
            return ourDate
        },
        itemClick (node, item, e) {
            // eslint-disable-next-line no-console
            console.log(node.model.text + ' clicked !', item, e)
        }
    }

}
</script>
