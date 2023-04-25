import Header from './components/servers/header'
import ApiNavbar from './components/cliants/ApiNavbar';
// import { getAllProductsData } from '@/utils/functions/getAllProducts';
// import ProductsCardAdmin from './componentsAdmin/ProductsCardAdmin';

export const metadata = {
  title: 'Home Page',
  description: 'Generated by create next app',
}



export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export default async function Home() {

  // const productsJSONObjectFS = await getAllProductsData();
  // const productsArrayFS = productsJSONObjectFS.products;

  // console.log(` --------------------------- productsArrayFS --------------------------- `);
  // console.log(productsArrayFS);
  // console.log(` --------------------------- productsArrayFS --------------------------- `);

  return (
    <>

      <div className="flex flex-col gap-y-10 pb-20">

        <div className="w-full bg-antiquewhite rounded-b-full px-20 py-2">
          <Header></Header>
        </div>
        <main className="px-5">

          <ApiNavbar></ApiNavbar>

          {/* <div className='flex flex-wrap gap-x-10 gap-y-10 justify-evenly pb-10 mt-10'>

            {productsArrayFS.map((curItem, index) => {
              return (
                <>
                  <div key={index} className="w-max max-w-sm border-orange-400 border-2 rounded-lg px-10 pt-5 pb-5 h-max">

                    <h6 className="mb-2 text-2xl font-semibold text-orange-500 text-center">{`${curItem.id}`}</h6>

                    <hr className='border-t-2 border-orange-400' />

                    <div className="h-full pt-4 flex gap-x-8 items-center ">

                      <Image src={curItem.img} alt="team" width={64} height={64} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full" />

                      <div className="flex-grow flex flex-col gap-y-4">

                        <div className="">

                          <h2 className="text-xl text-gray-900 font-medium">
                            {curItem.title}
                          </h2>

                          <p className="text-sm text-gray-500">
                            {curItem.description}
                          </p>
                        </div>


                        <p className="text-2xl text-black font-semibold">
                          {`${curItem.price} ₹`}
                        </p>

                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div> */}

{/* 
          <div className='flex flex-wrap gap-x-10 gap-y-10 justify-evenly py-10'>
            {productsArrayFS.map((curItem, index) => {
              return (
                <ProductsCardAdmin key={curItem.id}
                  {...curItem}>
                </ProductsCardAdmin>
              )
            })}
          </div> */}

        </main>
      </div>
    </>
  )
}
