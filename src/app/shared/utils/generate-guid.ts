export function generateGuid(): string {
  const S4 = function(): string {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };

  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}