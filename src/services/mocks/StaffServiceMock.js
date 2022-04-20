const listStaff = [
    {
        code: '0123',
        name: 'Y Pham',
        email: 'y.pham@orientsoftware.com'
    },
    {
        code: '0124',
        name: 'Danh Huynh',
        email: 'danh.huynh@orientsoftware.com'
    },
    {
        code: '0125',
        name: 'Luong Le',
        email: 'luong.le@orientsoftware.com'
    },
    {
        code: '0126',
        name: 'Vy Tran',
        email: 'vy.tran@orientsoftware.com'
    },
]

export const getListTodo = () => new Promise((resolve) => resolve(listStaff));