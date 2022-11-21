import React, { Component } from "react";


  
class App extends Component {


    state = {
        message: ""
    };
  
    render() {

        // const handleChange = (e) => {
        //     const searchValue = e.target.value;
        //     if (!searchValue.startsWith(' ')) {
        //         setSearchValue(searchValue);
        //     }
        // };
        return (
                <input

                // ref={inputRef}
                // value={searchValue}
                // placeholder="Search accounts and videos"
                // spellCheck={false}
                // onChange={handleChange}
                // onFocus={() => setShowResult(true)}
                name="search_value"
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            this.setState({ message: e.target.value },
                            () => {
                                // alert(this.state.message);
                            
                                
                            });
                        }
                    }}
                    type="text"
                />
        );
    }
}
export default App;