interface HeroProps {
  data: {
    title: string
    description: string
  }
}

export default function Hero({ data }: HeroProps) {
  const { title, description } = data

  return (
    <div
      className="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(11,7,13, 0.3),rgba(11,7,13, 0.6)), url(/sushijexpress.jpg)",
      }}
    >
      <div className="space-y-4 text-center">
        <h1 className="text-4xl inline-block font-bold">{title}</h1>
        <p className="text-xl max-w-lg text-blue-100">{description}</p>
      </div>
    </div>
  )
}
