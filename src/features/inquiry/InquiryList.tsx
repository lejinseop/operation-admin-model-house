import { useEffect } from 'react'
import type { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '~/app/store'
import { fetchInquiryData } from './inquirySlice'

import Table from '~/components/organisms/Table'

const InquiryList: FC = () => {
  const dispatch = useDispatch()
  const { inquiryData, isLoading, isError } = useSelector(
    (state: RootState) => state.inquiry,
  )

  useEffect(() => {
    if (inquiryData.length === 0) {
      dispatch(fetchInquiryData())
    }
  }, [inquiryData])

  return <Table list={inquiryData} isLoading={isLoading} isError={isError} />
}

export default InquiryList
