import notFoundImg from '/404.png'

const NotFound = () => {
  return (
    <div className='h-dvh'>
        <img className='w-full h-full object-cover' src={notFoundImg} />
        <button className="btn btn-info font-bold text-2xl px-9 py-2 absolute bottom-70 left-1/2 -translate-x-1/2">Back To Home</button>
    </div>
  )
}

export default NotFound