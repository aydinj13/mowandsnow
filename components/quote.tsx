export default function Quote() {
    return (
        <section className="relative isolate overflow-hidden bg-[#ffc107] px-6 py-24 sm:py-32 lg:px-8 mt-10">
            <div className="absolute inset-0 -z-10 bg-[#ffc107] opacity-100" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <img className="mx-auto h-12" src="logo.png" alt="" />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “We always strive to provide quality and professional service.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Owner</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">Mow and Snow Estate Maintenance</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}