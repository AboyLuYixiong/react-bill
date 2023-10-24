// 创建路由实例 绑定path element
import { createBrowserRouter } from "react-router-dom"

import Layout from "@/pages/Layout"
import Month from "@/pages/Month"
import Year from "@/pages/Year"
import New from "@/pages/New"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Month />
      },
      {
        path: 'year',
        element: <Year />
      },
    ]
  },
  {
    path: '/new',
    element: <New />
  }
])

export default router