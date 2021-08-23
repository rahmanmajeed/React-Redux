# How Context works

# 1.Create a Context

     React.createContext()


//provider--> data/variable provide
//consumer --> data/varable receive.

 # 2.wrap parent with Context.Provider

   const Context = React.createContext();
   Ex:
     <Context.Provider>
      <Parent/>
     </Context.Provider>
 
 # 3.Provide value to Context as Prop
  Ex: 
      <Context.Provider value={value}>
      <Sender/>
     </Context.Provider>

 # 4.Wrap child with Context Consumer
 # 4.In functional component use useContext()

 Ex: In-Traditional way.
      <Context.Consumer>
      <Receiver/>
     </Context.Consumer>
 
 Ex: In Functional way.
      import Context from '/Contextfile';
      const consumer = useContext(Context)
     

 # 5.Receive data in Context Consumer follow by render prop

 Ex: Traditional approach.

      <Context.Consumer>
      {
           ({value}) => (
              <Receiver value={value}/>
           )
      }
     </Context.Consumer>

//hooks useContext(ContextName);

({value1,value2}) => {
     <Receiver value1={value1} value2={value2}>
}

# 5.Receive data from Context and use in Consumed Components.

 Ex: Functional approach.
     const consumer = useContext(Context)

     return(
          <div>
            <h1>{consumer.value}</h1>
          </div>
     )
      


  const myContext = createContext();


  //Parent

  <myContext.Provider myContextValue={myContextValue}>
      <Parent/>

    </myContext.Provider>

    //use

    const myContext = useContext(myContext)

