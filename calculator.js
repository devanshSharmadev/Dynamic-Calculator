x=''
ans=''
i=0
j=0
k=-1
flago=false
flagb=false
calc=false
lastflag=false
var forz=[]
var num=[]
var op=[]
var oper=["+","-","*","/","%"]
function getvalue(objbutton)
{
    temp=objbutton.value
    if(Number(temp)%1==0)
    {
        if(flagb==false)
        {
            forz.push(temp)
            num.push(temp)
            j+=1
            ans=(num.slice(i,j)).join('')
        }
        if(flagb==true)
        {
            forz.push(temp)
            num.push(temp)
            j+=1
            x=(num.slice(i,j)).join('')
            calc=true
            flago=false
            
            lastflag=true
            
        }
    }
    else if(temp=='=')
    {
        forz.push("=")
        ans=calculate(ans,op[k],x)
        forz.push(ans)
        finalanswer.innerHTML="(Final Answer)"
        
    }
    else
    {
        if(oper.includes(temp))
        {
            if(lastflag==true)
            {
                ans=calculate(ans,op[k],x)
                
            }
            if(flago==false)
            {
                forz.push(temp)
                op.push(temp)
                flago=true
                flagb=true
                i=j
                k+=1
            }
            
                
            
        }

        else if(temp=='C')
        {
            
        }

        else if(temp=='CE')
        {
            
        }
    }
    console.log(ans,x)
    console.log(forz,num,op)
    console.log(forz.join(''))
    txtbox.innerHTML=forz.join('')
    answ.innerHTML=ans
}

function calculate(a,b,c)
{
    if(b=='+'){
        return parseInt(a)+parseInt(c)
    }
    else if(b=='-')
    {
        return parseInt(a)-parseInt(c)
    }
    else if(b=='*')
    {
        return parseInt(a)*parseInt(c)
    }
    else if(b=='/')
    {
        return parseInt(a)/parseInt(c)
    }
    else if(b=='%')
    {
        return (parseInt(a)/parseInt(c))*100
    }
}

