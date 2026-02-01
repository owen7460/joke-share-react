function BootLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-600 via-pink-500 to-orange-500">
      <div className="flex flex-col items-center gap-6 text-white animate-fade-in">
        <div className="w-14 h-14 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        <p className="text-xl font-bold tracking-wide">Welcome 👋</p>
      </div>
    </div>
  )
}

export default BootLoading
