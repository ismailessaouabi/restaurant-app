import Header from "../paretails/header";
import Footer from "../paretails/footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section className="backdrop-blur-xl relative py-24 sm:py-32 lg:py-48 text-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter">Experience Culinary Excellence</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">A symphony of flavors, crafted with passion and served with sophistication. Your unforgettable dining experience awaits.</p>
                        <div className="mt-8 flex justify-center gap-4">
                            <a className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-[#191a1f] text-base font-bold leading-normal tracking-wide hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-dark transition-colors" href="/">
                                Make a Reservation
                            </a>
                            <a className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-surface-dark text-white text-base font-bold leading-normal tracking-wide hover:bg-surface-dark/80 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-dark transition-colors" href="/">
                                View Our Menu
                            </a>
                        </div>
                    </div>
                </section>
                <section className="py-16 sm:py-24 bg-background-dark">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Our Popular Dishes</h2>
                            <p className="mt-3 max-w-xl mx-auto text-muted">Discover the creations that have captured the hearts of our patrons.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-surface-dark rounded-xl overflow-hidden group">
                                <img alt="Grilled Salmon" className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjT34Xk0l8g-PGeIAFLVga0LOh2uA8K9D3XzbDLeGxbyYcJdi70MkRmI1YTF0wu7aZvHVdUOyyZz5nk3ui33BWk95n1t5_BlcmIjtkaAqH4Ynea4sD_c0z0fd1l3bOta0ZtD_7G-nvtJNA5_C3n8UrwOPVrTl8HqxOSOOuDDF9qYKz-zsKcI1Fp14ggjGWJgplbR3JVaoeYx7c846lYcEafD6njjP6IDGXdVUjsvTSe_7S64com3nhHMGaSsXN90bwiZlUnJp-KoBj" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white">Grilled Salmon</h3>
                                    <p className="mt-2 text-muted">Perfectly grilled salmon fillet with a lemon-dill sauce, served over a bed of asparagus.</p>
                                    <p className="mt-4 text-primary font-semibold">$28.00</p>
                                </div>
                            </div>
                            <div className="bg-surface-dark rounded-xl overflow-hidden group">
                                <img alt="Wagyu Steak" className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRteU0AKDXF9MROfOUzrd8qbdECk6fC8qKcesFXPx7yDZbSrFWDj4N_AnWY0rEnDTwNOZVyTE6xTu5qhjQWdODA7K3LqwsqzgS4k5W_xsK7WOVTRdvCGUXEcV6jl__DVfuX6G9h4R-tcx4VeguN03IZFOMklNIE-91iLAr_uO6UZKnNeTpAda0oFKpTkNLi-ZFPq-GCyf--5_4ntck5Cf6AmD87q_RmkBq3TtOJzUMw7jxPy5HMQLDpzbKIP0Xfm_kukjxpNXAX8pM" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white">Filet Mignon</h3>
                                    <p className="mt-2 text-muted">A prime cut of tenderloin, seared to perfection and served with truffle mashed potatoes.</p>
                                    <p className="mt-4 text-primary font-semibold">$55.00</p>
                                </div>
                            </div>
                            <div className="bg-surface-dark rounded-xl overflow-hidden group">
                                <img alt="Truffle Pasta" className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzR7Q1lghTKj7eBsjoJQxXDROr_6QvnA9Wcd6BKIOaUeVB2Nph7Z_9vNFAUSHrtuxqUP048GjntVXx1KpKcezPvI83rvgBdtlQI10oEZu2f47C-OXj2KzvCkvD4Smb7a8xKS4YBgQFrxNWmiONktL_HvZPYoKrGabupGRY9aifaqO4qXk-prQay7AxuZJNCz2NjIEhaL4xjOz9LOq2fTQZi0ReX-lB29F7WB2zumIU3vIUrsHJlzu4lfkVCI4S-gGr7muXfnuzkVAa" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white">Truffle Pasta</h3>
                                    <p className="mt-2 text-muted">Handmade tagliatelle tossed in a creamy black truffle sauce, topped with fresh shavings.</p>
                                    <p className="mt-4 text-primary font-semibold">$32.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" backdrop-blur-xl py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">What Our Guests Say</h2>
                            <p className="mt-3 max-w-xl mx-auto text-muted">Stories from those who have shared a meal with us.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-surface-dark p-8 rounded-xl">
                                <p className="text-white">"An absolutely unforgettable dining experience. The ambiance was perfect, and every dish was a work of art. We will definitely be back!"</p>
                                <div className="mt-6 flex items-center gap-4">
                                    <img alt="Jessica Miller" className="h-12 w-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwWMe_M_plJ5pMqERN000UEkUf2SOWXc1tCfA5X0BCh7_WxukGLvWGKtji0oVslc27YIVNDsnTup8OjPQTv8lkJULRO8nnW_2-dbRZQkq5OSNFyihIYB6PA6crMmLfCF4xUi8uXJCtJD-WgM8ToFgJcIcs-h-QUfRJuAo6RaQxis7AwmlFAlGgM7WN-lBfIaniSSSqVYjr5y2OsqFVfB6fyAPcH49tHHFVj5PAjmPKkv_tl3ItIlfjLFwEkCGaw1jBYzFdzgAhClSE" />
                                    <div>
                                        <p className="font-bold text-white">Jessica M.</p>
                                        <p className="text-sm text-muted">Food Critic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-surface-dark p-8 rounded-xl">
                                <p className="text-white">"The service was impeccable from the moment we walked in. The staff was attentive and knowledgeable. The Filet Mignon was the best I've ever had."</p>
                                <div className="mt-6 flex items-center gap-4">
                                    <img alt="David Chen" className="h-12 w-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU3i1oDy-ijo2AILmg5BhuAdcFF2cRsi_KjdV39Pdv2BkFRAMXBJ95tZh1glo-lbsyk8WGlft5ntujisg6Gbu_0waz45elJuZp14LQcNRzPv-G_7kotEXLvT8pvwxs8UJ7drMkqtUaS8HA_5WkLeOEawRzQX8Z-EgXGijcZbTpZvEly2Ld43rLUwOcSNvMUyvcsFo0ZCFma7OdTHoj2o-HtrrK3bfvHSzZKy--Zw3RuJJfFmjINgmexXU3Cp6NiWjK_yUB-6_4VxNk" />
                                    <div>
                                        <p className="font-bold text-white">David C.</p>
                                        <p className="text-sm text-muted">Frequent Diner</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-surface-dark p-8 rounded-xl">
                                <p className="text-white">"We celebrated our anniversary here, and it couldn't have been more special. Thank you for the wonderful memories and the delicious truffle pasta!"</p>
                                <div className="mt-6 flex items-center gap-4">
                                    <img alt="Sarah &amp; Tom" className="h-12 w-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoalKjvYh8cUVwCalHu3yByqyZfdNwCkDU-SvWnYaOozaHradDhMc6VLgK_3-i__8zmu28RgybQpfSgBldAW9GIZdjT-9Jdi2RsWNLIHyxD2-3dIqYehDdOeMSCIUfPtWvQFcE9lGeT2ckPBsQjF-nQAUOYkTdKHvdoOgFhDby06ywrZDHhqaVuHsp_R0Ok6jixrmqdpAXt7GhYa6TFpSa0itLZyaw8V9TZsIWrVS4gyhQF6e0R_2KlX5vNT9Ae6EnNN31pBRWdwod" />
                                    <div>
                                        <p className="font-bold text-white">Sarah &amp; Tom</p>
                                        <p className="text-sm text-muted">Anniversary Dinner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 sm:py-24 bg-surface-dark">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Ready for an Unforgettable Meal?</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">Secure your table and let us take care of the rest. We look forward to welcoming you.</p>
                        <div className="mt-8">
                            <a className="inline-flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-[#191a1f] text-base font-bold leading-normal tracking-wide hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-dark transition-colors" href="/">
                                Book Your Table Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}