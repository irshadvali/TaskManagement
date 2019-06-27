
export const API_URL_ROOT = "https://frozen-shore-39944.herokuapp.com/irshad";
export async function post(url, payload) {
  console.log("Post ", `${API_URL_ROOT}/${url}`);
  console.log("payload ", JSON.stringify(payload));

 
  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
}



export async function get(url) {
  console.log("Url root", `${API_URL_ROOT}/${url}`);
  return await fetch(`${API_URL_ROOT}/${url}`, {});
}

export async function put(url, payload) {
  console.log("Url root", `${API_URL_ROOT}/${url}`);
  console.log("Url Body", JSON.stringify(payload));
  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
}
export async function patch(url) {
  console.log("Url root", `${API_URL_ROOT}/${url}`);

  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
}

