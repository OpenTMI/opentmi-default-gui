<template>
    <div class="app-container">
        <h3>Results Pivottable</h3>
        <vue-pivottable-ui
                :data="pivotData"
                :cols="cols"
                :rows="rows"
                :hiddenAttributes="hiddenAttributes"
                :aggregatorName="aggregatorName"
                :rendererName="rendererName"
                :derivedAttributes="derivedAttributes"
        >
        </vue-pivottable-ui>
    </div>
</template>

<script>
import Vue from 'vue'
import { resultsList } from '@/api/results'
import { VuePivottable, VuePivottableUi } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'


export default {
    name: 'ResultPivot',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        VuePivottable,
        VuePivottableUi
    },
    data() {
        const dateFormat = (field, format) => record => Vue.moment(record[field]).format(format)
        return {
            aggregatorName: 'Count',
            pivotData: [],
            rendererName: 'Table Heatmap',
            rows: ["campaign"],
            cols: ["exec.verdict"],
            derivedAttributes: {
                "year":       dateFormat("cre.time", "YYYY"),
                "month":      dateFormat("cre.time", "M"),
                "day":        dateFormat("cre.time", "D"),
                "month name": dateFormat("cre.time", "MMM"),
                "day name":   dateFormat("cre.time", "ddd"),
                "Week number": dateFormat( "cre.time", "W"),
            },
            hiddenAttributes: ["exec.logs"]
        }
    },
    created() {
        this.refreshData()
    },

    methods: {
        bin(value, binWidth) {
            return value - value % binWidth
        },
        refreshData() {
            const query = {
                fl: true,
                s: {'cre.time': -1}
            }
            resultsList(query)
                .then(({data}) => {
                    const results = this._.map(data, (r) => {
                        // not need these keys
                        delete r['__v']
                        delete r['_id._bsontype']
                        delete r['_id.id']
                        // round duration by 10s
                        r.duration = this.bin(parseFloat(r['exec.duration']), 10);
                        delete r['exec.duration']

                        const components = []
                        const features = []
                        for (const k of Object.keys(r)) {
                            if (k.match(/\.\d/) ){
                                if(k.match(/\.fut\.\d/)) {
                                    features.push(r[k].toLowerCase());
                                }
                                if(k.match(/\.cut\.\d/)) {
                                    components.push(r[k].toLowerCase());
                                }
                                delete r[k]
                            }
                        }
                        delete r['exec.sut.tag']
                        delete r['exec.sut.cut']
                        delete r['exec.sut.fut']
                        r.component = components.sort().join(',')
                        r.feature = features.sort().join(',')

                        r.passrate = r['exec.verdict']==='pass'?100.0:0;
                        r.inconcRate = r['exec.verdict']==='inconclusive'?100.0:0;
                        return r;
                    });
                    this.pivotData = results
                })
        },
        toggle: function(todo){
            todo.done = !todo.done
        }
    }
}
</script>
