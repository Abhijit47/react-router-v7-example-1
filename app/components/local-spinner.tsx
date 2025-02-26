import { LiaSpinnerSolid } from 'react-icons/lia';

export default function LocalSpinner() {
  return (
    <div className={''}>
      <span className={'sr-only'}>Loading...</span>
      <LiaSpinnerSolid className={'size-4 animate-spin'} />
    </div>
  );
}
