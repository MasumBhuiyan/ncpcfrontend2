import React, { Fragment, useState } from 'react';
import Committee from "../Components/Committee";
import { executiveCommittee, executiveCommitteeImages, executiveNameList, executivePostList } from "../Components/Context/ExecutiveCommittee";
import { webCommitteeNameList, webCommitteePostList, webCommittee, webCommitteeImages } from "../Components/Context/WebDevelopmentCommittee";
import { transportCommitteeImages, transportCommitteeNameList, transportCommitteePostList, transportCommittee } from "../Components/Context/Transport";
import { invitationCommitteeImages, invitationNameList, invitationPostList, invitationCommittee } from "../Components/Context/Invitation";
import { foodCommitteeImages, foodNameList, foodPostList, footCommittee } from "../Components/Context/Food";
import { culturalCommitteeImages, culturalNameList, culturalPostList, culturalCommittee } from "../Components/Context/Cultural";
import { publicationCommitteeImages, publicationNameList, publicationPostList, publicationCommittee } from "../Components/Context/Publication";
import { logisticCommitteeImages, logisticNameList, logisticPostList, logisticCommittee } from "../Components/Context/Logistic";
import TopMenu from "../Components/TopMenu";
import CommitteeTop from "../Components/CommitteeTop";
import ExecutiveCommitteeGrid from '../MyComponents/ExecutiveCommitteeGrid';
function CommitteePage(props) {

    const items = [
        { id: 1, name: 'Executive Committee' },
        { id: 2, name: 'Website and Registration' },
        { id: 3, name: 'Transportation and Accommodation' },
        { id: 4, name: 'Invitation Committee' },
        { id: 5, name: 'Food Committee' },
        { id: 6, name: 'Cultural Committee' },
        { id: 7, name: 'Logistic Committee' },
        { id: 8, name: 'Publication Committee' },
    ];
    const [activeItem, setActiveItem] = useState(items[0]);
    const onSelectCurrentLink = (item) => {
        setActiveItem(item);
    };

    return (
        <>
            <Fragment>
                <TopMenu />
                <div className='tab_wrapper'>
                    {items.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => onSelectCurrentLink(item)}
                            className={`single_tab ${activeItem?.id === item.id ? 'active' : ''}`}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>

                {
                    activeItem?.id == 1 ? <ExecutiveCommitteeGrid imageUrls={executiveCommitteeImages} executiveNameList={executiveNameList} executivePostList={executivePostList} committeeName={executiveCommittee} /> :
                        activeItem?.id == 2 ? <Committee imageUrls={webCommitteeImages} executiveNameList={webCommitteeNameList} executivePostList={webCommitteePostList} committeeName={webCommittee} /> :
                            activeItem?.id == 3 ? <Committee imageUrls={transportCommitteeImages} executiveNameList={transportCommitteeNameList} executivePostList={transportCommitteePostList} committeeName={transportCommittee} /> :
                                activeItem?.id == 4 ? <Committee imageUrls={invitationCommitteeImages} executiveNameList={invitationNameList} executivePostList={invitationPostList} committeeName={invitationCommittee} /> :
                                    activeItem?.id == 5 ? <Committee imageUrls={foodCommitteeImages} executiveNameList={foodNameList} executivePostList={foodPostList} committeeName={footCommittee} /> :
                                        activeItem?.id == 6 ? <Committee imageUrls={culturalCommitteeImages} executiveNameList={culturalNameList} executivePostList={culturalPostList} committeeName={culturalCommittee} /> : 
                                            activeItem?.id == 7 ? <Committee imageUrls={logisticCommitteeImages} executiveNameList={logisticNameList} executivePostList={logisticPostList} committeeName={logisticCommittee} /> : 
                                                activeItem?.id == 8 ? <Committee imageUrls={publicationCommitteeImages} executiveNameList={publicationNameList} executivePostList={publicationPostList} committeeName={publicationCommittee} /> : ''

                }

                {/*   <Committee imageUrls={executiveCommitteeImages} executiveNameList={executiveNameList} executivePostList={executivePostList} committeeName={executiveCommittee} />
                <Committee imageUrls={webCommitteeImages} executiveNameList={webCommitteeNameList} executivePostList={webCommitteePostList} committeeName={webCommittee} />
                <Committee imageUrls={transportCommitteeImages} executiveNameList={transportCommitteeNameList} executivePostList={transportCommitteePostList} committeeName={transportCommittee} />
                <Committee imageUrls={invitationCommitteeImages} executiveNameList={invitationNameList} executivePostList={invitationPostList} committeeName={invitationCommittee} />
                <Committee imageUrls={foodCommitteeImages} executiveNameList={foodNameList} executivePostList={foodPostList} committeeName={footCommittee} />
                <Committee imageUrls={culturalCommitteeImages} executiveNameList={culturalNameList} executivePostList={culturalPostList} committeeName={culturalCommittee} />
                <Committee imageUrls={publicationCommitteeImages} executiveNameList={publicationNameList} executivePostList={publicationPostList} committeeName={publicationCommittee} />
                <Committee imageUrls={logisticCommitteeImages} executiveNameList={logisticNameList} executivePostList={logisticPostList} committeeName={logisticCommittee} /> */}

            </Fragment>
        </>
    );
}

export default CommitteePage;


