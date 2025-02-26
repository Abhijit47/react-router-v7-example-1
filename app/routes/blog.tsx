import {
  supportsLocalStorage,
  supportsVibrationAPI,
} from '~/components/feature-check.client';

export default function BlogPage() {
  return (
    <div>
      <h1>BlogPage</h1>
      <p>
        {supportsVibrationAPI
          ? 'Vibration API is supported'
          : 'Vibration API is not supported'}
      </p>
      <p>
        {supportsLocalStorage
          ? 'Local Storage is supported'
          : 'Local Storage is not supported'}
      </p>
    </div>
  );
}
