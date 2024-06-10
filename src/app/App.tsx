import React from "react";
import {Provider} from "react-redux";
import {Main, Container, Wrapper} from "components/layout";
import {store} from "store";
import {Tables} from "../pages/adeptTables";

export const App = () => (
    <Provider store={store}>
        <Main>
            <Container>
                <Wrapper>
                    <Tables/>
                </Wrapper>
            </Container>
        </Main>
    </Provider>
);
