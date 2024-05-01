import React from 'react'
import Infobox from './InfoBox.jsx'
const InfoBoxes = () => {
    return (
        <section>
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Infobox heading="For Renters" backgroundColor='bg-gray-100'
                        buttonInfo={
                            {
                                backgroundColor: 'bg-black',
                                text: 'Browse Properties',
                                link: '/properties'
                            }
                    }>
                        Find your dream rental property. Bookmark properties and contact owners
                    </Infobox>
                    <Infobox heading="For Property Owners" backgroundColor='bg-blue-100'
                        buttonInfo={
                            {
                                backgroundColor: 'bg-blue-600',
                                text: 'Add Property',
                                link: '/properties'
                            }
                    }>
                        List your properties and reach potential tenants. Rent as an Airbnb or long term
                    </Infobox>
                </div>
            </div>
        </section>
    )
}

export default InfoBoxes
