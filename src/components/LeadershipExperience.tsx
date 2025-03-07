import {StyledContent, StyledMain} from "./StyledComponents.tsx";
import styled from "styled-components";

const StyledListHeading = styled.li`
    font-size: 1.5em;
    margin-top: 20px;
    padding-bottom: 5px;
    color: #333;
    list-style-type: none;`

const StyledListContent = styled.div`
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;

    p {
        font-size: 1.5em;
        color: #666;
        margin-bottom: 10px;
    }
    
    ul {
        margin-left: 20px;
        padding-left: 20px;
    }
    li {    
        font-size: 1.1em;
        line-height: 1.5;
        margin-bottom: 8px;
        
    }
`

export default function LeadershipExperience(){
    return (
        <StyledContent>
            <StyledMain>
                <ul>
                    {/* Club Experience Section*/}
                    <StyledListHeading><h2>Club Experience</h2></StyledListHeading>

                    <StyledListContent>
                        <h3>Boston University Finance and Investment Club (BUFC)</h3>
                        <p><em>Junior Analyst (Healthcare Sector)</em></p>
                        <ul>
                            <li>Researched and presented weekly deliverables regarding financial models.</li>
                            <li>Facilitated weekly discussions regarding a stock pitch on the healthcare sector.</li>
                        </ul>
                    </StyledListContent>

                    <StyledListContent>
                        <h3>Boston University Taiwanese Overseas Students Association</h3>
                        <p><em>Event Team Organizer</em></p>
                        <ul>
                            <li>Hosted cultural events for Taiwanese students and shadowed under the event team.</li>
                            <li>Led the members in local events celebrating Taiwanese culture.</li>
                        </ul>
                    </StyledListContent>

                    {/* Other Experience Section*/}
                    <StyledListHeading><h2>Other Experience</h2></StyledListHeading>

                    <StyledListContent>
                        <h3>FongMUN</h3>
                        <p><em> Hsinchu, Taiwan</em></p>
                        <ul>
                            <li>Led academic-related affairs and solved inquiries for 150 delegates.</li>
                            <li>Hosted weekly discussions with 12 undergraduate Chairs to facilitate the conference.
                            </li>
                        </ul>
                    </StyledListContent>
                </ul>

            </StyledMain>
        </StyledContent>
    )
}