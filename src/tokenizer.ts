import { fromPreTrained }  from '@lenml/tokenizer-gemma3'
const tokenizer = fromPreTrained();
const getTokenSize = (text: string): number => {
  const ids = tokenizer.encode(text);
  return ids.length;
};

export default getTokenSize
