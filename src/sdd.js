{
  value.wishList.includes(id) ? (
    <Link onClick={addToWishList(id)}>
      <span>
        <i className="fas fa-heart"></i>
      </span>
    </Link>
  ) : (
    <Link onClick={addToWishList(id)}>
      <span>
        <i className="far fa-heart"></i>
      </span>
    </Link>
  );
}


style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;"
style="padding-left:0;">ITEMS 3