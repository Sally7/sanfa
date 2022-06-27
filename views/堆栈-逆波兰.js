var evalRPN = function(tokens) {
    const stack=[];
    for(const ch of tokens)
    {
        switch(ch){
            case '+':
                a=stack.pop();
                b=stack.pop();
                stack.push(b+a);
                break;
            case '-':
                a=stack.pop();
                b=stack.pop();
                stack.push(b-a);
                break;
            case '*':
                a=stack.pop();
                b=stack.pop();
                stack.push(a*b);
                break;
            case '/':
                a=stack.pop();
                b=stack.pop();
                stack.push(Math.trunc(b/a));
                break;
            default:
                stack.push(parseInt(ch));
                break;
        }
    }
    return stack.pop()
};