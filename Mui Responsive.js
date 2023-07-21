   <Stack spacing={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" }, // Change direction on small screens
                alignItems: { xs: "center", md: "flex-start" }, // Center items on small screens
                padding: { xs: "16px", md: "24px" }, // Adjust padding on different screens
              }}
            >
              <Box>
                <Typography variant="h4">Manage Blueprints</Typography>
              </Box>

              <Stack
               spacing={2}
               direction={{ xs: "row", md: "row" }} // Change direction on small screens
               sx={{ mt: { xs: 2, md: 0 } }} // Add margin top 2 for "xs", 0 for "md" and above
              >
                <Button
                  size="small"
                  onClick={() => router.back()}
                  startIcon={
                    <SvgIcon fontSize="small">
                      <ArrowBackIosOutlined />
                    </SvgIcon>
                  }
                  variant="outlined"
                  sx={{
                    border: "1px solid",
                    borderColor: "rgb(19 117 137)",
                  }}
                >
                  Go Back
                </Button>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  onClick={() => router.push(`${bluePrintId}/email/create`)}
                  sx={{
                    padding: 1,
                    backgroundColor: "rgb(19 117 137)",
                    "&:hover": {
                      backgroundColor: "rgb(19 117 137)",
                    },
                  }}
                >
                  Add New Email
                </Button>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  onClick={() => router.push(`${bluePrintId}/task/create`)}
                  sx={{
                    padding: 1,
                    backgroundColor: "rgb(19 117 137)",
                    "&:hover": {
                      backgroundColor: "rgb(19 117 137)",
                    },
                  }}
                >
                  Add New Task
                </Button>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  onClick={() => router.push(`${bluePrintId}/form/create`)}
                  sx={{
                    padding: 1,
                    backgroundColor: "rgb(19 117 137)",
                    "&:hover": {
                      backgroundColor: "rgb(19 117 137)",
                    },
                  }}
                >
                  Add New Form
                </Button>
              </Stack>
            </Box>

            <Card {...props}>
              <Scrollbar>
                <Box sx={{ minWidth: 800 }} style={{ overflowY: "scroll" }}>
                  <CustomDataGrid
                    columns={columns}
                    rows={bluePrintTable}
                    sx={{ padding: 2 }}
                    loading={isLoading}
                    components={{
                      Toolbar: CustomToolbar,
                      NoResultsOverlay: () => (
                        <Stack
                          height="100%"
                          alignItems="center"
                          justifyContent="center"
                        >
                          No record found
                        </Stack>
                      ),
                      NoRowsOverlay: () => (
                        <Stack
                          height="100%"
                          alignItems="center"
                          justifyContent="center"
                        >
                          No record found
                        </Stack>
                      ),
                    }}
                    autoHeight={true}
                    getRowHeight={() => "auto"}
                    paginationMode="server"
                    filterMode="server"
                    initialState={{
                      pagination: {
                        pageSize: 25,
                      },
                    }}
                    rowCount={count}
                    onFilterModelChange={onFilterChange}
                    onPageChange={(data) => {
                      console.log("Data---", data);
                      onPageChange(data);
                    }}
                    onPageSizeChange={(data) => {
                      onPageSizeChange(data);
                    }}
                    disableSelectionOnClick={true}
                  />
                </Box>
              </Scrollbar>

              {/* -------------------------- Dialog To Delete---------------------------> */}
              <Dialog
                open={deleteDialog}
                onClose={handleCloseDialog}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle
                  style={{ cursor: "move" }}
                  id="draggable-dialog-title"
                >
                  Delete
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Are you sure you want to delete this {deleteTitle}?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog}>Cancel</Button>
                  <Button onClick={handleSubmitDialog}>Delete</Button>
                </DialogActions>
              </Dialog>
            </Card>
          </Stack>
