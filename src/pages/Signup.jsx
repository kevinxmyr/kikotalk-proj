import React, { useState } from "react";

const Signup = (props) => {
  const [containPassword, setContainPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(0);
  // const [gender, setGender] = useState('');

  
  const passwordChar = [
    {
      chars: /[0-9]/,
      message: "must contain at least one number",
    },
    {
      chars: /[a-z]/,
      message: "must contain one numerical digit",
    },
    {
      chars: /[A-Z]/,
      message: "must contain one numerical digit",
    },
    {
      chars: /[!@#$%^&*()_+=-?><:"';]/,
      message: "must contain one special character",
    },
  ];

  const containPasswordFunc = (event) => {
    setContainPassword(event.target.value);

    if (event.target.value.length >= 8) {
      setContainPassword(true);
    } else {
      setContainPassword(false);
    }
  };

  const validateForSubmitButton = (event) => {
    const input = event.target.value;
    for (let x of passwordChar) {
      console.log(input.match(x.chars));
    }
  };

  return (
    <>
      {/* <div className="col-span-2 w-[] ">
        <input
          onChange={validateForSubmitButton}
          className="p-3 text-[1.1rem] rounded-md ring-1 ring-gray-300 w-[100%] inset-shadow"
          type="password"
          //ADD EVENT HANDLER LATER -- TYPE for string and password
          placeholder="New Password"
        />
      </div> */}
      <style>{`
    .box-shadow {
      -webkit-box-shadow: 1px 3px 14px 5px rgba(0, 0, 0, 0.22);
      -moz-box-shadow: 1px 3px 14px 5px rgba(0, 0, 0, 0.22);
      box-shadow: 1px 3px 14px 1px rgba(0, 0, 0, 0.14);
    }
    .bordergender{
      border: 1px solid #d1d1d1;

    }
  `}</style>

      <div className="relative text-[#4b4b4b]">
        <div
          className="z-10 bg-green transition-all hover:cursor-pointer hover:bg-hovergreen rounded-md py-3 w-[12rem]
        m-[0_auto]
        "
        >
          <button className="font-bold text-white">Create new account</button>
        </div>

        <div
          className={`${
            props.openModal
              ? "relative bg-cyan-00 top-[5rem] w-[35rem]"
              : "hidden"
          }`}
        >
          {/* CONTAINER NG SIGNUP */}
          <div className="py-5 px-6 box-shadow bg-white rounded-lg">
            <div className="grid grid-cols-2 gap-2 justify-items-stretch">
              <div className="flex flex-col items-start">
                <h1 className="text-[1.7rem] font-bold">Sign Up</h1>
                <p className=" text-[1.1rem]">It's quick and easy.</p>
              </div>

              <div className="col-start-1 col-span-2 my-2 opacity-10">
                <hr />
              </div>
              
              {/* FIRST NAME */}
              <div className="col-start-1">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-3 text-[1.1rem] rounded-md ring-1 ring-gray-300 w-[100%] inset-shadow"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              
              {/* LAST NAME */}
              <div>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-3 text-[1.1rem] rounded-md ring-1 ring-gray-300 w-[100%] inset-shadow"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              {/* -----------------MOBILE AND EMAIL------------- */}
              <div className="col-span-2 w-[] ">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 text-[1.1rem] rounded-md ring-1 ring-gray-300 w-[100%] inset-shadow"
                  type="email"
                  placeholder="Mobile number or Email"
                />
              </div>
              {/* -----------------PASSWORD------------- */}
              <div className="col-span-2 w-[] ">
                <input
                  onChange={containPasswordFunc}
                  className="p-3 text-[1.1rem] rounded-md ring-1 ring-gray-300 w-[100%] inset-shadow"
                  type="password"
                  //ADD EVENT HANDLER LATER -- TYPE for string and password
                  placeholder="New Password"
                />
              </div>

              <div className={containPassword ? "col-span-3" : "hidden"}>
                <input
                  className="p-3 text-[1.1rem] rounded-md ring-1 ring-gray-300 w-[100%] inset-shadow"
                  type="password"
                  placeholder="Re-enter Password"
                />
              </div>

              {/* BIRTHDAY PABABA WRAPPER */}
              <div className="grid grid-cols-3 col-span-2 gap-2">
                <div className=" col-span-3">
                  <p className="flex">Birthday</p>
                </div>

                <div>
                  <select
                    className="p-3 text-[1.1rem] rounded-md ring-1 ring-gray-300 w-[100%] inset-shadow"
                    type="password"
                    //ADD EVENT HANDLER LATER -- TYPE
                    placeholder="Month"
                  >
                    <option value="Jan">January</option>
                    <option value="Feb">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="Jun">June</option>
                    <option value="Jul">July</option>
                    <option value="Aug">August</option>
                    <option value="Sept">September</option>
                    <option value="Oct">October</option>
                    <option value="Nov">November</option>
                    <option value="Dec">December</option>
                  </select>
                </div>
                <div>
                  <select
                    className="p-3 text-[1.1rem] rounded-md ring-1 ring-gray-300 w-[100%] inset-shadow"
                    type="password"
                    //ADD EVENT HANDLER LATER -- TYPE
                    placeholder="Month"
                  >
                    <option value="Jan">01</option>
                    <option value="Feb">02</option>
                    <option value="March">03</option>
                    <option value="April">04</option>
                    <option value="May">05</option>
                    <option value="Jun">06</option>
                    <option value="Jul">07</option>
                    <option value="Aug">08</option>
                    <option value="Sept">09</option>
                    <option value="Oct">10</option>
                    <option value="Nov">11</option>
                    <option value="Dec">12</option>
                    <option value="Dec">13</option>
                    <option value="Dec">14</option>
                    <option value="Dec">15</option>
                    <option value="Dec">16</option>
                    <option value="Dec">17</option>
                    <option value="Dec">18</option>
                    <option value="Dec">19</option>
                    <option value="Dec">20</option>
                    <option value="Dec">21</option>
                    <option value="Dec">22</option>
                    <option value="Dec">23</option>
                    <option value="Dec">24</option>
                    <option value="Dec">25</option>
                    <option value="Dec">26</option>
                    <option value="Dec">27</option>
                    <option value="Dec">28</option>
                    <option value="Dec">29</option>
                    <option value="Dec">30</option>
                    <option value="Dec">31</option>
                  </select>
                </div>

                <div>
                  <select
                    className="p-3 text-[1.1rem] rounded-md ring-1 ring-gray-300 w-[100%] inset-shadow"
                    type="password"
                    //ADD EVENT HANDLER LATER -- TYPE
                    placeholder="Month"
                    id="year"
                    name="year"
                  >
                    <option value="1922">1922</option>
                    <option value="1923">1923</option>
                    <option value="1924">1924</option>
                    <option value="1925">1925</option>
                    <option value="1926">1926</option>
                    <option value="1927">1927</option>
                    <option value="1928">1928</option>
                    <option value="1929">1929</option>
                    <option value="1930">1930</option>
                    <option value="1931">1931</option>
                    <option value="1932">1932</option>
                    <option value="1933">1933</option>
                    <option value="1934">1934</option>
                    <option value="1935">1935</option>
                    <option value="1936">1936</option>
                    <option value="1937">1937</option>
                    <option value="1938">1938</option>
                    <option value="1939">1939</option>
                    <option value="1940">1940</option>
                    <option value="1941">1941</option>
                    <option value="1942">1942</option>
                    <option value="1943">1943</option>
                    <option value="1944">1944</option>
                    <option value="1945">1945</option>
                    <option value="1946">1946</option>
                    <option value="1947">1947</option>
                    <option value="1948">1948</option>
                    <option value="1949">1949</option>
                    <option value="1950">1950</option>
                    <option value="1951">1951</option>
                    <option value="1952">1952</option>
                    <option value="1953">1953</option>
                    <option value="1954">1954</option>
                    <option value="1955">1955</option>
                    <option value="1956">1956</option>
                    <option value="1957">1957</option>
                    <option value="1958">1958</option>
                    <option value="1959">1959</option>
                    <option value="1960">1960</option>
                    <option value="1961">1961</option>
                    <option value="1962">1962</option>
                    <option value="1963">1963</option>
                    <option value="1964">1964</option>
                    <option value="1965">1965</option>
                    <option value="1966">1966</option>
                    <option value="1967">1967</option>
                    <option value="1968">1968</option>
                    <option value="1969">1969</option>
                    <option value="1970">1970</option>
                    <option value="1971">1971</option>
                    <option value="1972">1972</option>
                    <option value="1973">1973</option>
                    <option value="1974">1974</option>
                    <option value="1975">1975</option>
                    <option value="1976">1976</option>
                    <option value="1977">1977</option>
                    <option value="1978">1978</option>
                    <option value="1979">1979</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                  </select>
                </div>
                {/* end of 3 cols */}
              </div>

              <form className="col-span-3 grid gap-2 grid-cols-2">
                <div className="col-span-3 flex justify-between">
                  <h1>Gender</h1>
                </div>

                <div
                  className="bordergender col-start-1 col-span-[1.5] flex justify-between
               ring-1 ring-gray-300 inset-shadow text-[1.1rem] rounded-md p-3"
                >
                  <p>Male</p>
                  <input type="radio" name="gender"></input>
                </div>

                <div
                  className="bordergender col-start-2 flex justify-between
              ring-1 ring-gray-300 inset-shadow text-[1.1rem] rounded-md p-3"
                >
                  <p>Female</p>
                  <input type="radio" name="gender"></input>
                </div>
              </form>
              {/* END COL 2 */}
            </div>
            
            <div className="text-start mt-[1rem]">
              <p className="text-[.8rem]">
                People who use our service may have uploaded your contact
                information to KikoTalk. By clicking Sign Up, you
                agree to our Terms,<span className="font-bold underline">Privacy Policy</span> and <span className="font-bold underline">Cookies Policy</span>. You may
                receive SMS Notifications from us and can opt out any time.
                Charot lang to! 
              </p>
            </div>
            {/* SUBMIT BUTTON */}
            <div className="mt-[1.5rem] col-span-3">
              <button
                className={`z-10 transition-all hover:cursor-pointer hover:bg-hovergreen rounded-md py-3 w-[12rem]
        m-[0_auto] text-white font-bold text-[1.1rem] ${firstName.length && lastName.length !== 0 ? 'pointer-events-auto bg-green' : 'pointer-events-none bg-green opacity-40'} `}
              >
                Submit
              </button>
            </div>
            
            
            
            
            {/* <div className="mt-[1.5rem] col-span-3">
              <button
                className={`z-10 bg-green transition-all hover:cursor-pointer hover:bg-hovergreen rounded-md py-3 w-[12rem]
        m-[0_auto] text-white font-bold text-[1.1rem] ${firstName.length && lastName.length !== 0 ? 'bl' : 'block'} `}
              >
                Submit
              </button>
            </div> */}

            {/* END OF SIGNUP CONTAINER ⤓ */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
