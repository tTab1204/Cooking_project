<Col xl={8} md={12} xs={24} key={index} className="gutter-row">
  <Card hoverable={true} style={{ border: "none" }}>
    <Link to={`/hosts/${host._id}`} style={removeLinkColor}>
      <Row type="flex">
        <Col xs={10} md={24}>
          <div style={{ textAlign: "center" }}>
            <Avatar
              style={{
                width: "150px",
                height: "150px",
              }}
              src={`http://localhost:5000/${host.image}`}
              alt="host-main-image"
            />
          </div>

          <Col xs={14} md={24}>
            <div
              style={{
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              <Title level={2} style={{ marginBottom: "0px" }}>
                {host.name}
              </Title>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src={Mini_Korea} width="50px" height="50px" alt="nation" />
            </div>
          </Col>
        </Col>
      </Row>
      <Divider />
      <Row>
        <div className="host-bottom-card ">
          {/* Follow */}
          <Follow
            userFrom={localStorage.getItem("userId")}
            detail={host}
            url={match.url}
          />

          {/* Ratings */}
          <Ratings />
        </div>
      </Row>
      <Row style={{ paddingTop: "10px" }}>{host.description}</Row>
    </Link>
  </Card>
</Col>;
