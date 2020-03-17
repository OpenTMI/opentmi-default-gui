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
            loadData: this._.debounce(this._loadData, 250)
        }
    },
    methods: {
        _loadData(node, resolve) {
            const id = node.data.id ? node.data.id : 0
            const {level, type, filters = {}} = node.data
            if (id === 0) {
                this.getRoot().then(resolve)
            } else if (type === 'tests') {
                if (level === 0) {
                    const options = {level: 1, field: 'tcid', type, filters}
                    this.getDistinct(options).then(resolve)
                } else if (level === 1) {
                    const options = {level: 2, field: 'exec.duts.0.model', type, filters}
                    this.getDistinct(options).then(resolve)
                }  else if (level === 1) {
                    const options = {level: 2, field: 'exec.verdict', type, filters}
                    return this.getDistinct(options).then(resolve)
                }  else if (level === 2) {
                    const options = {level: 3, field: 'exec.verdict', type, filters}
                    return this.getDistinct(options).then(resolve)
                }  else if (level === 3) {
                    const icon = 'fa fa-check icon-state-success'
                    const isLeaf = true
                    const options = {level: 3, field: 'job.id', type, filters, isLeaf, icon}
                    return this.getDistinct(options).then(resolve)
                }
            } else {
                resolve([])
            }
        },
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
        getRoot() {
            return Promise.resolve([
                {text: 'tests', level: 0, type: 'tests', isLeaf: false},
                //{text: 'campaigns', level: 0, type: 'campaign', isLeaf: false},
                //{text: 'dut models', level: 0, type: 'dutModel', isLeaf: false},
            ])
        },
        getDistinct({level, field, filters = {}, type, isLeaf = false, icon}) {
            const query = this.distinct(filters, field)
            return resultsList(query)
                .then(({data}) => {
                    const mapper = text => {
                        const filters = this._.merge(filters, {[field]: text})
                        return {
                            text,
                            level,
                            isLeaf,
                            icon,
                            type,
                            filters
                        }
                    }
                    const treeData = this._.map(data, mapper)
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
