import request from '@/utils/request'
import omit from 'lodash'

export function searchResource(id) {
  return request({
    url: `/api/v0/resources/${id}`,
    method: 'get'
  })
}
export function createResource(data) {
  return request({
    url: `/api/v0/resources`,
    method: 'post',
    data
  }).then(({ data }) => data)
}

export function updateResource(data) {
  return request({
    url: `/api/v0/resources/${data._id}`,
    method: 'put',
    data: omit(data, ['_id'])
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
    const fill = (key, { title, def = '', type }) => {
      key = key.split('.').join('.properties.')
      _.set(schema, `properties.${key}.title`, title)
      if (def) _.set(schema, `properties.${key}.default`, def)
      if (type) _.set(schema, `properties.${key}.type`, type)
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

    fill('hw.firmware.name', { title: 'Name' })
    fill('hw.firmware.version', { title: 'Version' })
    fill('hw.sn', { title: 'Serial Number' })
    fill('hw.imei', { title: 'Imei' })
    fill('hw.hwid', { title: 'HW ID' })

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
    fill('user_info.author', { title: 'author' })
    fill('user_info.cost_center', { title: 'cost_center' })

    fill('usage.type', { title: 'Type' })
    fill('usage.group', { title: 'Group' })
    fill('usage.automation.system', { title: 'Automation System' })

    fill('network.hostname', { title: 'Hostname' })
    fill('network.domain', { title: 'domain' })
    fill('network.remote_connection.protocol', { title: 'Protocol' })
    fill('network.remote_connection.url', { title: 'Url' })
    fill('network.remote_connection.authentication.username', { title: 'Username' })
    fill('network.remote_connection.authentication.password', { title: 'Password' })

    fill('location.site', { title: 'Site' })
    fill('location.country', { title: 'country' })
    fill('location.city', { title: 'city' })
    fill('location.adddress', { title: 'adddress' })
    fill('location.postcode', { title: 'postcode' })
    fill('location.room', { title: 'room' })
    fill('location.subRoom', { title: 'subRoom' })
    fill('location.geo', { title: 'geo' })
    fill('location.rack', { title: 'Rack' })
    fill('location.bed', { title: 'Test Bed' })
    fill('location.slot', { title: 'Slot' })

    fill('shield.rf', { title: 'RF shielded', type: 'boolean' })

    fill('childs', { title: 'childs' })
    fill('parent', { title: 'parent', type: 'boolean' })

    fill('installed.os.name', { title: 'OS' })
    fill('installed.os.build', { title: 'Build _id' })

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
