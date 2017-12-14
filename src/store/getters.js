/**
 * Created by arron_Li on 17/12/8. // 获取全局公用静态数据方法整合
 */
const getters = {
  avatar: state => state.user.avatar,
  login: state => state.user.login,
  routers: state => state.routerTree.routers,
  sidebar: state => state.routerTree.sidebar
}
export default getters
