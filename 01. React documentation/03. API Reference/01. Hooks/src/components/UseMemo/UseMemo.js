import SkippingRecalculationWithUseMemo from './SkippingRecalculationWithUseMemo/SkippingRecalculationWithUseMemo';

export default function UseMemo() {
  return (
    <>
      <h1>
        useMemo is a React Hook that lets you cache the result of a calculation
        between re-renders
      </h1>
      <SkippingRecalculationWithUseMemo />
    </>
  );
}
