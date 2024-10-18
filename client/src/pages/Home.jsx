import Form from '../components/Form.jsx'
import Players from '../components/Players.jsx'

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className={`bg-center bg-cover bg-[url(assets/CWS.png)] h-[50%]`}>
        <div className="flex flex-col justify-center items-center h-[100%] py-2 px-5 md:py-10 md:px-20">
          <div className="flex flex-col justify-center items-center p-5 h-[50%]">
            <p className="text-7xl">HOMEBOYS</p>
            <Form />
          </div>

          {/* <Players /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
