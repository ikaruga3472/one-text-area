import './style.css'
import getTokenSize  from './tokenizer'

const textarea = document.querySelector<HTMLTextAreaElement>('#note')
const countNoSpace = document.querySelector<HTMLSpanElement>('#count-no-space')
const countWithSpace = document.querySelector<HTMLSpanElement>('#count-with-space')
const countToken = document.querySelector<HTMLSpanElement>('#count-token')

if (textarea && countNoSpace && countWithSpace && countToken) {
  const updateCounts = () => {
    const value = textarea.value
    const noSpaceCount = value.replace(/\s/g, '').length
    countNoSpace.textContent = String(noSpaceCount)
    countWithSpace.textContent = String(value.length)
    // gemma 토큰 계산
    const tokensLength: number = getTokenSize(value)
    countToken.textContent = tokensLength > 0 ? String(tokensLength) : '-'
  }

  textarea.addEventListener('input', () => {
    updateCounts()
  })
  updateCounts()
}
