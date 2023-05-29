import React from 'react'
import RecipientCard from './RecipientCard'

const MainRecipientCard = () => {
  return (
    <div>
      <RecipientCard
        title="Recipient"
        AccName="Jason Obi"
        BankName="First Bank of Nigeria"
        AcctNumber={232123221}
        recAmount="N740,000.00"
      />
    </div>
  )
}

export default MainRecipientCard