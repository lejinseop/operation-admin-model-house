import type { FC } from 'react'

import InquiryList from '~/features/inquiry/InquiryList'

const Dashboard: FC = () => {
  return (
    <div>
      <h2>dashboard</h2>
      <InquiryList />
    </div>
  )
}

export default Dashboard
