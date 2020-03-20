import request from '@/utils/request'

export function searchResult(id) {
  return request({
    url: `/api/v0/results/${id}`,
    method: 'get'
  })
}

export function getSchema(_) {
  return request({
    url: `/api/v0/schemas/Result.json`,
    method: 'get'
  }).then(({ data }) => {
    const { schema } = data
    const fill = (key, { title, def = '' }) => {
      key = key.split('.').join('.properties.')
      _.set(schema, `properties.${key}.title`, title)
      _.set(schema, `properties.${key}.default`, def)
    }
    const drop = (key) => {
      key = key.split('.').join('.properties.')
      _.unset(schema, `properties.${key}`)
    }
    const dropKeys = (keys) => {
      keys.forEach(drop)
    }
    fill('tcid', { title: 'Testcase ID' })
    fill('campaign', { title: 'Campaign' })
    fill('job.id', { title: 'Job ID' })
    fill('exec.duration', { title: 'Duration' })
    fill('exec.verdict', { title: 'Verdict' })
    fill('exec.env.framework.name', { title: 'Framework name' })
    fill('exec.env.framework.ver', { title: 'Framework Version' })
    fill('exec.env.rackId', { title: 'Rack ID' })
    fill('exec.note', { title: 'Note' })
    fill('exec.sut.gitUrl', { title: 'git uri' })
    fill('exec.sut.buildName', { title: 'build name' })
    fill('exec.sut.buildDate', { title: 'build date' })
    fill('exec.sut.branch', { title: 'branch' })
    dropKeys(['exec.env.ref',
      'exec.sut.ref',
      'tcRef', '_id',
      'campaignRef',
      'cre',
      'exec.dut'
    ])
    return schema
  })
}

export function resultsList(query) {
  return request({
    url: '/api/v0/results',
    method: 'get',
    params: query
  })
}
