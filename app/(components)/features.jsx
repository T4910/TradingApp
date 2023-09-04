import Showfeatures from "./displayFeatures"

export default function features() {
  return (
    <div className="p-6 border-b border-gray-5">
        <h3 className="text-xl mb-2 font-medium">Features</h3>
        <div className="w-11/12 m-auto">
          <Showfeatures src='/images/3-19.jpg' imgContainerStyle='h-20'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere voluptatum tempore veniam doloribus labore ex quidem asperiores officia impedit repellendus nisi cumque magni excepturi debitis totam vel, tenetur consequatur.
          </Showfeatures>
        </div>
    </div>
  )
}
