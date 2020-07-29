
const url = 'https://www.reddit.com/.json';


const dispatchGetSubReddit = (payload) => {
    return  {
        type: 'SUB_REDDIT',
        payload
    }
};
const sortedData = (payload) => {
    return  {
        type: 'SORT_SUB_REDDIT',
        payload
    }
};
const makeRequest = (payload) => {
    return  {
        type: 'REQUEST',
        payload
    }
};

const groupBySubreddit = (data) => {
    const group = {};

    data && data.forEach((item) => {
        const subreddit = item.data.subreddit;
        if(group[subreddit]) {
            group[subreddit].push(item.data);
            group[subreddit] = group[subreddit].sort((a,b) => +b.ups - +a.ups);
        }else{
            group[subreddit] = [];
            group[subreddit].push(item.data);
        }
    })
    return group;
};

export const getSubReddit = () => async(dispatch) => {
    dispatch(makeRequest(true));
    fetch(url).then(response => response.json().then(data => {
        dispatch(dispatchGetSubReddit(data.data.children));
        dispatch(sortedData(groupBySubreddit(data.data.children)));
    })
    ).catch(error => {
        console.log('error', error)
    }).finally(()=>{
        dispatch(makeRequest(false));
    })
};

export const sortReddit = (value) => async(dispatch, getState) => {
    value = value && value.trim() && value.toLowerCase();
    const app =  getState().app;
    dispatch(sortedData([]))
    dispatch(makeRequest(true));
    const searchFunc = (value, app) => {
        return new Promise((resolve) => {
            const result = value ? app.filter((item) => {
                return item.data.title.toLowerCase().includes(value)
            }) : app;
            resolve(result);
        })
    }

    searchFunc(value, app).then((data) => {
        dispatch(sortedData(groupBySubreddit(data)))
        dispatch(makeRequest(false));
    });
    
};

export const filterReddit = (value) => async(dispatch, getState) => {
    const app =  getState().app;
    dispatch(sortedData([]));
    // 1. Date (new - old)
    // 2, Date (old - new)
    // 3. UpVotes (highest - lowest)
    // 4. UpVotes (lowest - highest)


    dispatch(makeRequest(true));
    const filterFunc = (value, app) => {
        return new Promise((resolve) => {
            const filter = (data, value) => {
                if(value === 1) {
                    app = data.sort((a,b) => b.data.created - a.data.created)
                }else if(value === 2){
                   app = data.sort((a,b) => a.data.created - b.data.created)
                }else if(value === 3){
                    app = data.sort((a,b) => b.data.ups - a.data.ups)
                }else if(value === 4){
                    app = data.sort((a,b) => a.data.ups - b.data.ups)
                }else {
                    app = data;
                }
                return app;
            };
            const res = filter(app, value);
            resolve(res)
        })
    }

    filterFunc(value, app).then((data) => {
        dispatch(sortedData(groupBySubreddit(data)))
        dispatch(makeRequest(false));
    });
    

};
