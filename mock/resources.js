import { filter, get } from 'lodash'
import Mock from 'mockjs'
import utils from './utils'

const { query, getItem } = utils

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  const type = Mock.Random.pick([
    'system', 'dut', 'dut', 'dut',
    'instrument', 'accessories', 'computer', 'computer', 'room'
  ])
  const nameTable = {
    system: `system#${i}`,
    room: `room#${i}`,
    computer: `nuc0${i}`,
    dut: Mock.Random.pick(['samsung', 'huawei', 'nokia']),
    accessories: Mock.Random.pick(['usb-cable', 'power-cable']),
    instrument: Mock.Random.pick(['powermeter', 'power', 'rf-switch'])
  }
  const name = get(nameTable, type, Mock.Random.first())

  List.push(Mock.mock({
    _id: '@increment',
    cre: {
      time: +Mock.Random.date('T'),
      user: Mock.Random.first()
    },
    name,
    type,
    status: {
      value: Mock.Random.pick(['active', 'maintenance', 'storage', 'broken']),
      note: Mock.Random.string()
    },
    parent: null,
    childs: []
  }))
}

const rooms = filter(List, { type: 'room' })
const systems = filter(List, { type: 'system' })
const computers = filter(List, { type: 'computer' })

List.forEach(obj => {
  if (obj.type === 'system') {
    const someRoom = Mock.Random.pick(rooms)
    obj.parent = `${someRoom._id}`
    someRoom.childs.push(`${obj._id}`)
  } else if (obj.type === 'computer') {
    const someSystem = Mock.Random.pick(systems)
    obj.parent = `${someSystem._id}`
    someSystem.childs.push(`${obj._id}`)
  } else {
    const someComputer = Mock.Random.pick(computers)
    obj.parent = `${someComputer._id}`
    someComputer.childs.push(`${obj._id}`)
  }
})

export default [
  {
    url: '/api/v0/resources',
    type: 'get',
    response: config => query(List, config)
  },

  {
    url: '/api/v0/resources/:_id',
    type: 'get',
    response: config => getItem(List, config)
  },

  {
    url: '/api/v0/resources/create',
    type: 'post',
    response: _ => {
      return {}
    }
  },

  {
    url: '/api/v0/resources',
    type: 'put',
    response: _ => {
      return {}
    }
  }
]
