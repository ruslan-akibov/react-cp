import bindable from 'cp/bindable';

const STORE = bindable({
   SOMETHING: {
     size: '1em'
   }
});

export default STORE.connect;


export function setBig() {
  STORE.SOMETHING.size = '2em';
}

export function setSmall() {
  STORE.SOMETHING.size = '1em';
}
