// eslint-disable-next-line react/prop-types
export const AISpeechFeatureHeading = ({ title, tagLine, id }) => {
   return (
      <>
         <section className='py-12 bg-black sm:py-16 lg:py-16 ' id={id}>
            <div className='max-w-4xl mx-auto  py-16'>
               <h2 className='text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl'>
                  {title}
               </h2>
               <p className='mt-6 text-lg font-normal text-gray-400 max-w-2xl mx-auto'>
                  {tagLine}
               </p>
            </div>
         </section>
      </>
   );
};
