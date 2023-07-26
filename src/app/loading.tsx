export default function LoadingProduct() {
  return (
    <div className="ml-auto flex  w-full max-w-spaceLeft animate-pulse gap-12">
      <div className="  flex w-[696px] flex-col gap-6">
        <div className="relative h-[480px] w-full rounded-lg bg-gray-80" />
        <div className="flex-rol flex w-full justify-between">
          <span className="h-[32px] w-[330px] rounded-lg bg-gray-80" />
          <span className="h-[32px] w-[100px] rounded-lg bg-gray-80" />
          <span />
        </div>
      </div>
    </div>
  )
}
