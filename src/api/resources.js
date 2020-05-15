import request from '@/utils/request'

export function searchResource(id) {
  return request({
    url: `/api/v0/resources/${id}`,
    method: 'get'
  })
}

export function resourceList(query) {
  return request({
    url: '/api/v0/resources',
    method: 'get',
    params: query
  })
}

export function getSchema(_) {
  return request({
    url: `/api/v0/schemas/Resource.json`,
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
    fill('name', { title: 'Name' })
    fill('type', { title: 'Type' })
    fill('item.model', { title: 'Model' })
    fill('status.value', { title: 'Status' })
    fill('status.note', { title: 'Note' })
    fill('status.availability', { title: 'Availability' })
    fill('ownership.corporation', { title: 'Owner corporation' })
    fill('ownership.unit', { title: 'unit' })
    fill('ownership.division', { title: 'division' })
    fill('ownership.department', { title: 'department' })
    fill('ownership.cost_center', { title: 'cost center' })
    fill('ownership.author', { title: 'author' })
    fill('ownership.purchased.timestamp', { title: 'Purchaced time' })
    fill('ownership.purchased.note', { title: 'Purchaced note' })

    fill('user_info.corporation', { title: 'corporation' })
    fill('user_info.unit', { title: 'unit' })
    fill('user_info.division', { title: 'division' })
    fill('user_info.department', { title: 'department' })
    fill('user_info.cost_center', { title: 'cost_center' })

    fill('usage.type', { title: 'Type' })
    fill('usage.group', { title: 'Group' })
    fill('usage.automation.system', { title: 'Automation System' })

    fill('network.hostname', { title: 'Hostname' })
    fill('network.domain', { title: 'domain' })

    fill('location.site', { title: 'Site' })
    fill('location.country', { title: 'country' })
    fill('location.city', { title: 'city' })
    fill('location.adddress', { title: 'adddress' })
    fill('location.postcode', { title: 'postcode' })
    fill('location.room', { title: 'room' })
    fill('location.subRoom', { title: 'subRoom' })
    fill('location.geo', { title: 'geo' })

    dropKeys([
      '_id',
      'cre',
      'status.time',
      'mod',
      'item.ref',
      'ownership.purchased.user'
    ])
    return schema
  })
}
