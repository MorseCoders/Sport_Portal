import React from 'react'
import SportItem from './SportItem'
const DUMMY_DATA = [
  {
    id: 1,
    name: "Cricket",
    minimun_Player: 11,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXs2O6hJmCLB_i1B17GIoTF9KRjKLJntS3Q&usqp=CAU",
    clg: "gehu"
  },
  {
    id: 2,
    name: "Cricket",
    minimun_Player: 11,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXs2O6hJmCLB_i1B17GIoTF9KRjKLJntS3Q&usqp=CAU",
    clg: "geu"
  },
  {
    id: 3,
    name: "Cricket",
    minimun_Player: 11,
    clg: "geub",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXs2O6hJmCLB_i1B17GIoTF9KRjKLJntS3Q&usqp=CAU"
  },
  {
    id: 4,
    name: "Cricket",
    minimun_Player: 11,
    clg: "geub",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXs2O6hJmCLB_i1B17GIoTF9KRjKLJntS3Q&usqp=CAU"
  },
  {
    id: 5,
    name: "Cricket",
    minimun_Player: 11,
    clg: "geuh",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXs2O6hJmCLB_i1B17GIoTF9KRjKLJntS3Q&usqp=CAU"
  }, {
    id: 6,
    name: "Cricket",
    minimun_Player: 11,
    clg: "geu",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXs2O6hJmCLB_i1B17GIoTF9KRjKLJntS3Q&usqp=CAU"
  },
  {
    id: 7,
    name: "Cricket",
    minimun_Player: 11,
    clg: "geu",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXs2O6hJmCLB_i1B17GIoTF9KRjKLJntS3Q&usqp=CAU"
  },
  {
    id: 8,
    name: "Cricket",
    minimun_Player: 11,
    clg: "geu",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXs2O6hJmCLB_i1B17GIoTF9KRjKLJntS3Q&usqp=CAU"
  },
  {
    id: 9,
    name: "Cricket",
    minimun_Player: 11,
    clg: "geu",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXs2O6hJmCLB_i1B17GIoTF9KRjKLJntS3Q&usqp=CAU"
  },
  {
    id: 10,
    name: "Cricket",
    minimun_Player: 11,
    clg: "geu",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXs2O6hJmCLB_i1B17GIoTF9KRjKLJntS3Q&usqp=CAU"
  },
]

const SportsList = () => {

  const gehu = DUMMY_DATA.filter((s) => {
    return (s.clg === "gehu");

  });
  const geu = DUMMY_DATA.filter((s) => {
    return (s.clg === "geu");

  });
  const geub = DUMMY_DATA.filter((s) => {
    return (s.clg === "geub");

  });

  return (
    <section >
      <div> 
      <div> GEHU..</div>
      <div className='w-screen h-max grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3   place-items-center p-5  '>
        {gehu.map((item) => {

          return <SportItem key={item.id} sport={item} />
        })}
      </div></div>
      <div>
      <div> GEU..</div>
      <div className='w-screen h-max grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3   place-items-center p-5  '>
        {geu.map((item) => {

          return <SportItem key={item.id} sport={item} />
        })}
      </div>
      </div>
      <div>
      <div> GEUB..</div>
      <div className='w-screen h-max grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3   place-items-center p-5  '>
        {geub.map((item) => {

          return <SportItem key={item.id} sport={item} />
        })}
      </div>
      </div>

    </section>
  )
}

export default SportsList