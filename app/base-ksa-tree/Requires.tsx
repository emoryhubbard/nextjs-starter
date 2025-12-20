//prettier-ignore
export function Requires({
  className,
  children,
  builds,
  exists,
  ...props
}: React.ComponentProps<"div"> & { builds: string; exists: string }) {
  return (
    <>
      <div
        className={`${className} absolute left-[22.5rem] mt-[-2.5rem]`}
        {...props}
        data-slot="requires"
      >
        <div>
          <strong>requires</strong> {children}
        </div>
        {builds && (
          <div>
            <strong>builds</strong> {builds}
          </div>
        )}
        {exists && (
          <div>
            <strong>covered by</strong> <a className="text-blue-500 underline" href={exists}>{exists}</a>
          </div>
        )}
      </div>
      <div className="mt-[-.5rem]">{"\u00A0"}</div>
    </>
  );
}
