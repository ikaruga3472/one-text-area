import { fromPreTrained }  from '@lenml/tokenizer-gemma3'
const tokenizer = fromPreTrained();
const getTokenSize = (text: string): number => {
  const ids = tokenizer.encode(text, {add_special_tokens: false});

  // 개발자 디버그: 토큰 확인
  if (import.meta.env.DEV) {
    console.log(ids)
  }
  
  return ids.length;
};

export default getTokenSize
