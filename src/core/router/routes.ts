export const routesPerfixes = {
    accountList: "/account-list",
    transfer: "/transfer"
}

export const appRoutes = {
    root: "/",
    accountList: routesPerfixes.accountList,
    editAccount: "/edit-account/:id",
    movements: "/movements/:id",
    transfer: routesPerfixes.transfer,
    transferFromAccount: `${routesPerfixes.transfer}/:id`
}