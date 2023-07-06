# NIM-LIB-HelperFunctions

# Using Javascript Class in NIM
- Create Global Javascript variable
- Add Class to Javascript Code
    ![image](https://github.com/Tools4ever-NIM/NIM-LIB-HelperFunctions/assets/24281600/5cce9618-a727-40d9-915e-2905bf2082f7)

- Open a filter and create script column
- Below sample of the code you can use to access the class if the variable name was "T4ELib"


`
let lib = (new (variableGetValue('T4ELib'))() )
return lib.cleanName("My Test string here")
`
