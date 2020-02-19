import { LoadComponent } from 'utils/MyLoadable'
import { addPrefixPathRoute } from 'utils/RouteHelpers'

const BASE_URL = '/rules'

const Rules = LoadComponent(() => import('views/Rules/Rules'))

const routes = [
  {
    path: '/',
    name: 'Rules',
    component: Rules,
  },
]

export default addPrefixPathRoute(BASE_URL, routes)
