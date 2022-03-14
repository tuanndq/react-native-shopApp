export default function(value) {
  let x = value.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  x = x.split('.');
  x.splice(-1);
  return x.join(',') + 'K';
}

export const NumberFormatFull = (value) => {
  return value.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}