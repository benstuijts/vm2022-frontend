const sortConstructor = (sortedField, direction) => {
    return (a,b) => {
        if (a[sortedField] < b[sortedField]) {
            return direction === 'asc' ? -1 : 1;
          }
          if (a[sortedField] > b[sortedField]) {
            return direction === 'asc' ? 1 : -1;
          }
    }
}

const sortByStatusAndId = (ob1,ob2) => {
    if (ob1.status > ob2.status) {
        return 1;
    } else if (ob1.status < ob2.status) { 
        return -1;
    }

    if (ob1.id > ob2.id) { 
        return -1;
    } else if (ob1.id < ob2.id ) {
        return 1
    } else { 
        return 0;
    }
}

const sortByCreatedAt = sortConstructor("created_at", "desc");
const sortByStatus = sortConstructor("status", "asc");
const sortById = sortConstructor("id", "asc");
const sortByName = sortConstructor("name", "asc")
const sortByPrice = sortConstructor("vraagprijs", "desc")


export {
    sortConstructor,
    sortByCreatedAt,
    sortByStatus,
    sortById,
    sortByStatusAndId,
    sortByName,
    sortByPrice,
};

