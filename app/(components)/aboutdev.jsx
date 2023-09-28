import About from "./aboutdevBTN"

export default function aboutdev() {
  return (
    <div className="px-4 py-8 bg-greens-50 mb-4 flex flex-col border-y
                    md:px-8 md:py-12">
        <h3 className="text-2xl mb-2 font-semibold">A little about the developer...</h3>
        <p className="w-11/12 m-auto mb-8 block">
            Behind the scenes, there's a passionate developer who 
            brought this trading simulator to life. With a keen eye 
            for detail and a dedication to creating exceptional experiences,
            the developer has crafted this platform for your trading journey. 
            <br />
            Click the button to learn more about him.
        </p>
        <About />
    </div>
  )
}
