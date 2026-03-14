export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "HZ35J2AG79.com.beakericestudios.ReelEstate1",
          paths: ["/listing/*", "/reel/*"]
        }
      ]
    }
  });
}
