import { useEffect, useState } from 'react'
import { subjects, directObjects } from './config'

import CSS from './MissionStatement.module.css'
import { useColorContext } from '../../../context/CMY'
import { useGlobalIntervalContext } from '../../../context/GlobalInterval'

const MissionStatement = () => {
  const { appendOperation } = useGlobalIntervalContext()

  const { currentSubjectValue, currentDirectObjectValue } = useColorContext()
  const { operations } = useGlobalIntervalContext()

  useEffect(() => {
    appendOperation({
      opId: 'subject-text',
      currentValue: 0,
      arrayLength: subjects.length,
    })

    appendOperation({
      opId: 'direct-object-text',
      currentValue: 0,
      arrayLength: directObjects.length,
    })
  }, [appendOperation, currentSubjectValue, currentDirectObjectValue])

  return (
    <h1 className={CSS.heading}>
      <p>We&apos;re&nbsp;a</p>
      <p>group&nbsp;of</p>
      <p
        style={{
          color: currentSubjectValue,
          transition: 'var(--color-transition)',
          willChange: 'color',
        }}
      >
        {subjects[operations['subject-text']?.currentValue ?? 0]}
      </p>
      <p>working</p>
      <p>to&nbsp;fix&nbsp;the</p>
      <p
        style={{
          color: currentDirectObjectValue,
          transition: 'var(--color-transition)',
          willChange: 'color',
        }}
      >
        {directObjects[operations['direct-object-text']?.currentValue ?? 0]}
      </p>
      <p>created</p>
      <p>by&nbsp;modern</p>
      <p>business</p>
      <p>development.</p>
    </h1>
  )
}
export default MissionStatement
